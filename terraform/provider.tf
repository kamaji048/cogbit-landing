terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket         = "cogbit-terraform-state"
    key            = "cogbit-landing/terraform.tfstate"
    region         = "us-east-1"
    encrypt        = true
    dynamodb_table = "cogbit-terraform-locks"
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "cogbit-landing"
      Environment = var.environment
      ManagedBy   = "Terraform"
      Owner       = "Cogbit"
      Repository  = "https://github.com/kamaji048/cogbit-landing"
    }
  }
}

# Provider adicional em us-east-1 – obrigatório para certificados ACM no CloudFront
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "cogbit-landing"
      Environment = var.environment
      ManagedBy   = "Terraform"
    }
  }
}