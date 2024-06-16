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

	"client/**/*",
	'locales/*.lua',
}

server_scripts {

	"server/**/*",
	'locales/*.lua',
}

shared_script {
	'shared/*.lua',
}



files {
	'web/build/index.html',
	'web/build/**/*',
}
