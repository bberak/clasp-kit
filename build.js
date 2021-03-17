const processes = require("child_process");
const path = require("path");
const fs = require("fs");

const copyRecursiveSync = (src, dest) => {
	const exists = fs.existsSync(src);
	const stats = exists && fs.statSync(src);
	const isDirectory = exists && stats.isDirectory();
	if (isDirectory) {
		!fs.existsSync(dest) && fs.mkdirSync(dest);
		fs.readdirSync(src).forEach((childItemName) => {
			copyRecursiveSync(
				path.join(src, childItemName),
				path.join(dest, childItemName)
			);
		});
	} else {
		fs.copyFileSync(src, dest);
	}
};

try {
	//-- Delete build folder
	fs.rmdirSync("build", { recursive: true });

	//-- Run build script on the client folder (webpack)
	processes.execSync("npm run build --prefix app/client");

	//-- Create build, client and server folders
	fs.mkdirSync("build/client", { recursive: true });
	fs.mkdirSync("build/server", { recursive: true });

	//-- Copy client files to build folder
	const js = fs.readFileSync("app/client/build/app.js", "utf8");
	fs.writeFileSync(
		"build/client/app.js.html",
		`<script type="text/javascript">${js}</script>`
	);
	fs.copyFileSync("app/client/src/app.css", "build/client/app.css.html");
	fs.copyFileSync("app/client/src/app.html", "build/client/app.html");

	//-- Copy settings and server files to build folder
	fs.copyFileSync("app/appsscript.json", "build/appsscript.json");
	copyRecursiveSync("app/server", "build/server");
} catch (err) {
	if (err.stdout)
		console.warn(err.stdout.toString());
	else
		console.warn(err);
}
