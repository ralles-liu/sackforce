class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?


    def login!(user)
        # now we can match the token in our session with our user's
        session[:session_token] = user.session_token
    end

    def current_user 
        if session[:session_token]
            @current_user ||= User.find_by(session_token: session[:session_token])
            return @current_user
        else
            return nil
        end 
    end

    def logout!

        # the old users needs to reset his session_token so someone cant hack it
        current_user.reset_session_token!

        # this way when you go to get current_user it returns as nil
        session[:session_token] = nil

    end

    def logged_in?

        # if current_user is nil, this returns false
        return !current_user.nil?
    end

    # EVENTUALLY MIGHT NEED SOMETHING HERE TO REQUIRE LOGGED IN OR OUT
end
