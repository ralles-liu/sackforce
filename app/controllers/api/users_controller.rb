class Api::UsersController < ApplicationController

    def create 
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 418
        end
    end



    def user_params
        return params.require(:user).permit(:username, :password)
    end


end
