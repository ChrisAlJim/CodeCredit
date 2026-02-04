import {Octokit} from "octokit"
import dotenv from "dotenv"
dotenv.config();
const token = process.env.TOKEN

const octokit = new Octokit({auth: token})

const makeRepository = async () => {
  try {
    const response = await octokit.request('POST /user/repos', {
      name: "Test-6",
      description: "Testing repo",
      private: true
    })

    console.log(response)

    return response.data.html_url
  } catch (error) {
    console.error(error)
  }
}

const repoUrl = await makeRepository()
console.log(repoUrl)