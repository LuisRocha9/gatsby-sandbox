<?php
add_theme_support( 'post-thumbnails', array( 'post', 'page', 'project' ) );

register_nav_menus(
  array(
    'menu-1' => esc_html__( 'Primary', 'gatsby-sandbox' ),
  )
);
?>
