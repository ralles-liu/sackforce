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
            membership = ChannelMembership.create!({user_id: current_user.id, channel_id: @channel.id})
            chat = LiveChat.create!()
            chatMembership = ChatChannelMembership.create!({channel_id: @channel.id, chat_id: chat.id})
            if membership && chat && chatMembership
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
        if !params.key?(:userId)
            channel = Channel.find(params[:channelId])

            if channel 
                channel.destroy
                # this shoudl cause a rerender by changing our mstp
                render json: {}
            else
                render json: ['no channel to destory'], status: 418
            end
        elsif params.key?(:userId) && params.key?(:channelId)
            membership = ChannelMembership.find_by(user_id: params[:userId], channel_id: params[:channelId])
            if membership
                membership.destroy

                # EVENTUALLY IN OUR CHANNEL STATE IT WILL HAVE PARTICIPANTS INDEX WHICH MSUT BE CHANGED the API UTIL needs to somehow poll for this?
                # or we don't return anyting we just know to remove that speific ID from the state!
                render json: {}
            else
                render json: ['no user to destroy'], status: 404
            end
        
        else
            render json: ['complete fail'], status: 404
        end

    end

    def update
    
        if params.key?(:username) && params.key?(:channelId)

            @user = User.find_by(username: params[:username])
            if @user 
                membership = ChannelMembership.new({user_id: @user.id, channel_id: params[:channelId]})
                if membership.save
                    # NEED TO RETURN THE USER and ALSO the RECEUVE user needs to trigger the useres session as well
                    render "/api/users/altshow"
                else
                    render json: ['couldnt create ChannelMembership'], status: 418
                end
            
            else 

                render json: ['couldnt find user'], status: 418
            end


        # CONFUSING BUT IN THIS CASE OUR AJAX REQUEST PASSES IN A DIFFERENT OBJECT    
        elsif !params[:channelId].key?(:userId)
            @channel = Channel.find(params[:channel][:id])

            @channel.name = params[:channel][:name]
            @channel.description = params[:channel][:description]
            @channel.public = params[:channel][:public]

            if @channel.save 
                render "/api/channels/show"
            else 
                render json: ["couldnt save the changes"], status: 401
            end

        else
            render json: ['complete fail'], status: 404
        end
    end


    def channel_params
        return params.require(:channel).permit(:admin_id, :name, :description, :public)

    end


end
