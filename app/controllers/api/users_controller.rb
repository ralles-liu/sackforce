class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            @channels = []
            render :show
        else
            render json: ["unable to create account with provided credentials"], status: 401
        end
    end



    def user_params
        return params.require(:user).permit(:display_name, :username, :password)
    end


end
