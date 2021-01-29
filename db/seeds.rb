User.delete_all
Channel.delete_all
ChannelMembership.delete_all


demo = User.create!(
    display_name: "demo",
    username: "demo@gmail.com",
    password: "demopassword"
)

ralles = User.create!(
    display_name: "ralles",
    username: "ralles@gmail.com",
    password: "rallespassword"
)

sarah = User.create!(
    display_name: "sarah",
    username: "sarah@gmail.com",
    password: "sarahpassword"
)

channel1 = Channel.create!(
    admin_id: demo.id,
    name: "demo's channel",
    description: "channel created by demo"
)

channel2 = Channel.create!(
    admin_id: ralles.id,
    name: "ralles's channel",
    description: "channel created by ralles"
)

channel3 = Channel.create!(
    admin_id: sarah.id,
    name: "sarah's channel",
    description: "channel created by sarah"
)

ChannelMembership.create!(
    user_id: demo.id,
    channel_id: channel1.id
)

ChannelMembership.create!(
    user_id: ralles.id,
    channel_id: channel2.id
)

ChannelMembership.create!(
    user_id: sarah.id,
    channel_id: channel3.id
)

ChannelMembership.create!(
    user_id: ralles.id,
    channel_id: channel1.id   
)

ChannelMembership.create!(
    user_id: demo.id,
    channel_id: channel2.id
)

ChannelMembership.create!(
    user_id: demo.id,
    channel_id: channel3.id
)

chat1 = LiveChat.create!(

)

chat2 = LiveChat.create!(

)

chat3 = LiveChat.create!(

)

chatMembership1 = ChatChannelMembership.create!(
    channel_id: channel1.id,
    chat_id: chat1.id
)

chatMembership2 = ChatChannelMembership.create!(
    channel_id: channel2.id,
    chat_id: chat2.id
)

chatMembership3 = ChatChannelMembership.create!(
    channel_id: channel3.id,
    chat_id: chat3.id
)

Message.create!(
    user_id: demo.id,
    chat_id: chat1.id,
    message: "Hello everyone I am the admin of this channel"
)

Message.create!(
    user_id: ralles.id,
    chat_id: chat1.id,
    message: "Hey demo, I am a participant in this channel"
)

Message.create!(
    user_id: demo.id,
    chat_id: chat1.id,
    message: "Hey ralles!"
)
