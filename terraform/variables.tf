variable "aws_region" {
  description = "Região AWS onde os recursos serão criados"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Ambiente de implantação (dev, staging, prod)"
  type        = string
  default     = "prod"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "O ambiente deve ser: dev, staging ou prod."
  }
}

variable "bucket_name" {
  description = "Nome único global do bucket S3"
  type        = string
  default     = "cogbit-landing-site"
}

variable "domain_name" {
  description = "Domínio customizado (ex: cogbit.com.br). Deixe vazio para usar o domínio padrão do CloudFront."
  type        = string
  default     = ""
}

variable "cloudfront_price_class" {
  description = "Classe de preço do CloudFront"
  type        = string
  default     = "PriceClass_100"

  validation {
    condition     = contains(["PriceClass_100", "PriceClass_200", "PriceClass_All"], var.cloudfront_price_class)
    error_message = "Valor inválido para cloudfront_price_class."
  }
}

variable "cloudfront_default_ttl" {
  description = "TTL padrão do cache CloudFront em segundos"
  type        = number
  default     = 86400
}

variable "cloudfront_max_ttl" {
  description = "TTL máximo do cache CloudFront em segundos"
  type        = number
  default     = 31536000
}

variable "index_document" {
  description = "Documento de índice padrão do site"
  type        = string
  default     = "index.html"
}

variable "error_document" {
  description = "Página de erro padrão"
  type        = string
  default     = "404.html"
}

variable "enable_versioning" {
  description = "Habilita versionamento no bucket S3"
  type        = bool
  default     = true
}