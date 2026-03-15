# outputs.tf

output "s3_bucket_name" {
  description = "Nome do bucket S3 - GitHub Secret S3_BUCKET_NAME"
  value       = aws_s3_bucket.site.id
}

output "s3_bucket_arn" {
  description = "ARN do bucket S3"
  value       = aws_s3_bucket.site.arn
}

output "cloudfront_distribution_id" {
  description = "ID da distribuição CloudFront – GitHub Secret CLOUDFRONT_DIST_ID"
  value       = aws_cloudfront_distribution.site.id
}

output "cloudfront_domain_name" {
  description = "Domínio padrão da distribuição CloudFront"
  value       = aws_cloudfront_distribution.site.domain_name
}

output "site_url" {
  description = "URL pública do site"
  value       = var.domain_name != "" ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.site.domain_name}"
}

output "acm_certificate_arn" {
  description = "ARN do certificado ACM"
  value       = var.domain_name != "" ? aws_acm_certificate.site[0].arn : "N/A – nenhum domínio customizado configurado"
}

output "acm_certificate_status" {
  description = "Status da validação do certificado ACM"
  value       = var.domain_name != "" ? aws_acm_certificate.site[0].status : "N/A"
}