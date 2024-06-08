fx_version "cerulean"

description "OneDev - SpeedoMeter"
author "OneDev"
version '1.0.0'

lua54 'yes'

games {
	"gta5",
	"rdr3"
}

ui_page 'web/build/index.html'

client_script {
	'@es_extended/locale.lua',
	"client/**/*",
	'locales/*.lua',
}

server_scripts {
	'@es_extended/locale.lua',
	'@oxmysql/lib/MySQL.lua',
	"server/**/*",
	'locales/*.lua',
}

shared_script {
	'shared/*.lua',
}

shared_script '@es_extended/imports.lua'

files {
	'web/build/index.html',
	'web/build/**/*',
}
