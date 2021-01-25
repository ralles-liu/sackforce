# why coulddn't i just do json.extract directly? it just immediately return that it seems

@channels.each do |channel|
    json.set! channel.id do
        json.extract! channel, :id, :name, :description, :public
    end
end

