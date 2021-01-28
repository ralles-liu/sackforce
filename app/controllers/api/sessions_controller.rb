class Api::SessionsController < ApplicationController


    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login!(@user)
            @channels = @user.channels
            render "/api/users/show"
        else
            render json: ["unable to login with provided credentials"], status: 401

        end
    end



    def destroy
        if logged_in?
            logout!
            render json: {}
        else
            render json: ['you are not logged in'], status: 404
        end
    end

end
