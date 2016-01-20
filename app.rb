require 'sinatra'
require 'sinatra/bootstrap'
register Sinatra::Bootstrap::Assets



get '/' do 
  erb :index
end