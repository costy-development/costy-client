const PATHS = {
  root_page: "/",
  tools_page: "/costy_tools",
  articles_page: "/articles",
  article_page: "/articles/:slug",
  // DASHBOARD
  dashboard_page: "/dashboard",
  dashboard_products_page: "/dashboard/products",
  dashboard_products_create_page: "/dashboard/products/create",
  dashboard_email_page: "/dashboard/email",
  dashboard_articles_page: "/dashboard/articles",
  dashboard_article_page: "/dashboard/articles/:slug",
  dashboard_create_article_page: "/dashboard/articles/create",
  // AUTH
  auth_page: "/auth",
  auth_login_page: "/auth/login",
  auth_register_page: "/auth/register",
  auth_forgot_password_page: "/auth/forgot_password",
  auth_confirm_email_page: "/auth/confirm_email",
  auth_update_password_page: "/auth/update_password",
};

const PRIVATE_ROUTES = [""];

export { PATHS, PRIVATE_ROUTES };
