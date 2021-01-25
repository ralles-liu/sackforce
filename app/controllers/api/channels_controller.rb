class Api::ChannelsController < ApplicationController

    def index 
        # DONT need to be given the ID, we can just get the user with current user
  
        if current_user
            
            @channels = current_user.channels
            
            render "/api/channels/show"
        else
            render json: ["no user"], status: 401
        end
    end

    # def create
    #     # creates a new channel

    # end

    # def destroy
    #     # destroys the channel and removes all the necessary connections
    # end

    # def update
    #     # update the details of the channel
    #     # or if a user is provided, adds that user
    # end




end
