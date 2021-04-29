pipeline {
	environment {
    		def APP_NAME = "SweetyKandekar"
    		def GIT_REPO_NAME = "Final_PetClinic"
    		def DEPLOY_ENV = "dev"
	}
    	agent { dockerfile true }
	stages {
		stage('Initialize') {
			steps {
				echo 'Placeholder.'
			}
		}
		
    	}
	post { 
		success { 
		    echo "Your Test execution is done and reports at- cucumber_report.html"
		}
		failure { 
		    echo "Please check logs for more details."
		}
    	}
}