class User < ApplicationRecord
    # this is how we take in password information 
    # then create a digest with it
    attr_reader :password

    # need to validate the restrictions i set in the db
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :display_name, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    after_initialize :ensure_session_token


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        if user 
            if user.is_password?(password) 
                return user
            else
            end
            return nil
        else 
            return nil
        end
    end

    def is_password?(password) 
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    # this is like your password setter method
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save
        return self.session_token
    end

        
end