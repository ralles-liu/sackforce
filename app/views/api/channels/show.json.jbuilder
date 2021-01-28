json.extract! @channel, :id, :name, :description, :public
json.set! :users do
    @channel.users.each do |user|
        json.set! user.id do
            json.extract! user, :id, :display_name, :username
        end
    end
end