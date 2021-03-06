require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)


module ChatSpace
  class Application < Rails::Application
    config.i18n.default_locale = :ja
    #日本語にする
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    #不要ファイルを生成しないようにする
      config.generators do |g|
      g.javascripts false
      g.helper false
      g.test_framework false
    end
    #ここまで

  end
end
