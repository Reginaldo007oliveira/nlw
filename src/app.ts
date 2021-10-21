import "dotenv/config"
import  Express  from "express";
const app = Express();

app.get("/github", (request, response) => {
    response.redirect(`http://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)

})

app.listen(4000, () => console.log(`   Server is running on PORT 4000`));