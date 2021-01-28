# why coulddn't i just do json.extract directly? it just immediately return that it seems

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

