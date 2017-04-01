# InstagramFeed

----
## what is this?
Simple NodeJS microservice to return Instagram feed for one user.

----
## Usage
1. Create new Instagram client from [here](https://www.instagram.com/developer/clients/manage/)
2. Click "Manage" to modify your Instagram client, make sure to add http://localhost:3000/token to "Valid redirect URIs" under security tab & also uncheck "Disable implicit OAuth". This step is needed to create token, you can undo it later.
3. Run "node index.js" locally & open new browser window to [// https://api.instagram.com/oauth/authorize/?client_id=95eff9ed9ed24910848b799d9d282edf&redirect_uri=http://localhost:3000/token&response_type=token&scope=public_content](https://api.instagram.com/oauth/authorize/?client_id=95eff9ed9ed24910848b799d9d282edf&redirect_uri=http://localhost:3000/token&response_type=token&scope=public_content)
4. Authorize the application then you will find Instagram token in the URL.
5. Deploy this microservice to your preferred hosting & add Instagram token in environment parameters with the name "TOKEN".
