var config =
{
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	parent: 'game', // Ide
	scene:
	{
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);

function preload()
{
	// Préchargement des ressources
}

function create()
{
	// Initialisation du jeu
}

function update()
{
	// maj du jeu
}