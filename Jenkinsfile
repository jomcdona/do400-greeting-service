pipeline{
    agent{
        label "nodejs"
    }
    stages{
        stage("Install dependencies"){
            steps{
                sh "npm ci"
            }
        }

        stage("Check Style"){
            steps{
                sh "npm run lint"
            }
        }

        // Add the "Deploy" stage here
        stage("Deploy"){
            steps{
                sh '''
                    oc project jomcdona-deployment-strategies
                    oc start-build greeting-service --follow --wait
                '''
            }
        }
    }
}
