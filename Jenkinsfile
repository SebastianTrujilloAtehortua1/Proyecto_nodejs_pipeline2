pipeline{
    agent any

    tools{
        nodejs "Nodejs"
    }

    stages{
        stage('install'){
            steps{
                git branch: 'developer', url: 'https://github.com/SebastianTrujilloAtehortua1/Proyectos_nodejs.git'
                dir('./'){
                    sh 'npm install'
                }
            }           
        }

        
    }
}