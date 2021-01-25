class Api::ChannelsController < ApplicationController

    def index 
        # DONT need to be given the ID, we can just get the user with current user
  
        if current_user
            
            @channels = current_user.channels
            
            render "/api/channels/index"
        else
            render json: ["no user"], status: 401
        end
    end

    def create
        # creates a new channel
        @channel = Channel.new(channel_params)
        
        if @channel.save
            # need to also create a channelmembership
            # also might need to create a chat and chat membership later
            membership = ChannelMembership.new({user_id: current_user.id, channel_id: @channel.id})
            if membership.save
                render "/api/channels/show"
            else

                render json: ['couldnt create ChannelMembership'], status: 401
            end
        else
            render json: ['couldnt create Channel'], status: 418
        end

    end

    def destroy
        # destroys the channel and removes all the necessary connections
        channel = Channel.find(params[:id])

        if channel 
            channel.destroy
            # this shoudl cause a rerender by changing our mstp
            render json: {}
        else
            render json: ['no channel to destory'], status: 418
        end
    end

    # def update
    #     # update the details of the channel
    #     # or if a user is provided, adds that user
    # end


    def channel_params
        return params.require(:channel).permit(:admin_id, :name, :description, :public)

    end


end
