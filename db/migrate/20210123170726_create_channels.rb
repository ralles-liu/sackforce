class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.integer :admin_id, null: false
      t.string :name, null: false, unqiue: true
      t.string :description, null: false
      t.boolean :public, null: false, default: false, null: false
      t.timestamps
    end

    add_index :channels, :admin_id
    add_index :channels, :name

  end
  
end
