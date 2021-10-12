<?php
/**
 * Replace Localhost cURL Certificates
 *
 * If the URL for an HTTP request in WordPress contains a .test
 * TLD, replace the WordPress local /certificates/ca-bundle.crt
 * with the PHP supplied bundle.
 */
function curl_patch_http_request_args( $parsed_args, $url ) {

	// Request URL points to a *.test host
	$test_tld = end( explode( ".", parse_url( $url, PHP_URL_HOST ) ) );
	if ( ! $test_tld ) return $parsed_args;

	// Replace WordPress local certificates with PHP's default cacert path
	$openssl_cert_locations = openssl_get_cert_locations();
	if ( isset( $openssl_cert_locations['default_cert_file'] ) ) {
		$parsed_args['sslcertificates'] = $openssl_cert_locations['default_cert_file'];
	}

	return $parsed_args;
}
add_filter( 'http_request_args', 'curl_patch_http_request_args', 99, 2 );
?>