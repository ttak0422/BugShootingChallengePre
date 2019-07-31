10.times do |i|
  name = "user#{i}"
  password = "password#{i}"
  password_confirmation = "password#{i}"
  User.create!(
    name: name, 
    password: password, 
    password_confirmation: password_confirmation,
  )
end