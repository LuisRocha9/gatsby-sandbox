<?php
add_theme_support( 'post-thumbnails', array( 'post', 'page', 'project' ) );

register_nav_menus(
  array(
    'menu-1' => esc_html__( 'Primary', 'gatsby-sandbox' ),
  )
);


add_action( 'graphql_register_types', function() {
    register_graphql_field( 'Project', 'author', [
        'type'        => 'String',
		'description' => 'author meta value',
        'resolve'     => function(  \WPGraphQL\Model\Post $post) {
		$author_id = get_post_meta( $post->databaseId, 'author', true );
        return get_the_title( absint( $author_id ));
        }
    ] );
});
?>


 