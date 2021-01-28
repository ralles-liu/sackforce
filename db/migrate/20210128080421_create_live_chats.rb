class CreateLiveChats < ActiveRecord::Migration[5.2]
  def change
    create_table :live_chats do |t|

      t.timestamps
    end
  end
end
