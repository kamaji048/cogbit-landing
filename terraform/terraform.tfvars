# terraform.tfvars
# ATENÇÃO: Nunca versione este arquivo com credenciais sensíveis.

aws_region   = "us-east-1"
environment  = "prod"
bucket_name  = "cogbit-landing-site"

# Descomente se tiver domínio customizado:
# domain_name = "cogbit.com.br"

cloudfront_price_class = "PriceClass_100"
cloudfront_default_ttl = 86400
cloudfront_max_ttl     = 31536000

index_document    = "index.html"
error_document    = "404.html"
enable_versioning = true