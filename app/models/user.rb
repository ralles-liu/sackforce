class User < ApplicationRecord
    # this is how we take in password information 
    # then create a digest with it
    attr_reader :password

    # need to validate the restrictions i set in the db
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
end
