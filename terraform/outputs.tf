# outputs.tf

output "s3_bucket_name" {
  description = "Nome do bucket S3 - GitHub Secret S3_BUCKET_NAME"
  value       = aws_s3_bucket.site.id
}

output "s3_bucket_arn" {
  description = "ARN do bucket S3"
  value       = aws_s3_bucket.site.arn
}

output "site_url" {
  description = "URL pública do site via S3 website"
  value       = "http://${aws_s3_bucket_website_configuration.site.website_endpoint}"
}

output "acm_certificate_arn" {
  description = "ARN do certificado ACM"
  value       = "N/A – CloudFront não disponível no AWS Academy"
}

output "cloudfront_distribution_id" {
  description = "ID da distribuição CloudFront"
  value       = "N/A – CloudFront não disponível no AWS Academy"
}

output "cloudfront_domain_name" {
  description = "Domínio CloudFront"
  value       = "N/A – CloudFront não disponível no AWS Academy"
}
