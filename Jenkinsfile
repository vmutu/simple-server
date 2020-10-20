pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm start'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test' 
            }
        }
    }
}
