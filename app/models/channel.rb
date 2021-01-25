class Channel < ApplicationRecord 
    belongs_to :user,
        class_name: :User,
        foreign_key: :admin_id,
        primary_key: :id

    has_many :channel_memberships, 
        class_name: :ChannelMembership,
        foreign_key: :channel_id,
        primary_key: :id



end
