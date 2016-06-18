module api
  module v1
    class PlaylistsController < ApplicationController
      skip_before_filter :verify_authenticity_token
      respond_to :json

      def index
        binding.pry
        respond_with(Playlist.all)
      end

      def show
        binding.pry
        respond_with(Playlist.find(params[:id]))
      end

      def new
      end

      def create
        @playlist = Playlist.new(playlist_params)
        if @playlist.save
          respond_to do |f|
            f.json { render :json => @playlist }
          end
        end
      end

      def update
        @playlist = Playlist.find(params[:id])
        if @playlist.update(playlist_params)
          respond_to do |f|
            f.json { render :json => @playlist }
          end
        end
      end

      def destroy
        respond_with Playlist.destroy(params[:id])
      end

      private

        def playlist_params
          params.require(:playlist).permit(:url)
        end

    end
  end
end
