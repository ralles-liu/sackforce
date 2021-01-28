
json.user do
    json.extract! @user, :id, :username, :display_name
end

json.channels do 
    @channels.each do |channel|
        participants = channel.users
        json.set! channel.id do
            json.extract! channel, :id, :name, :description, :public
            json.set! :users do
                channel.users.each do |user|
                    json.set! user.id do
                        json.extract! user, :id, :display_name, :username
                    end
                end
            end
        end
    end
end
    