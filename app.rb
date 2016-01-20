require 'sinatra'
require 'sendgrid-ruby'
require 'sinatra/flash'
require 'sinatra/redirect_with_flash'
require 'valid_email'
require 'valid_email/validate_email'
enable :sessions

get '/' do 
  erb :index
end

