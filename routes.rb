require 'sinatra'
require 'sendgrid-ruby'
require 'sinatra/flash'
require 'valid_email'
require 'valid_email/validate_email'

enable :sessions

get '/' do 
  erb :index
end

post '/email' do 
  if ValidateEmail.valid?(params[:mail])
    client = SendGrid::Client.new(api_user: ENV['SENDGRID_USERNAME'], api_key: ENV['SENDGRID_PASSWORD'])
    email = SendGrid::Mail.new do |m|
      m.to      = 'matt@mattc.io'
      m.from    = params[:mail]
      m.subject = 'Email Sent From Portfolio Contact Page'
      m.text    = "Name: #{params[:name]}\r\n\r\nPhone: #{params[:number]}\r\n\r\nBody: #{params[:comment]}"
    end
    client.send(email)
    flash[:notice]="You've messaged me, I'll get back to you asap!"
    redirect '/#contact'
  else
    flash[:notice]="Please use a properly formatted email address!"
    redirect '/#contact'
  end
end
