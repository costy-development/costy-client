import * as Pages from "@/pages";
import { PATHS } from "@/config/paths";

const routes = [
  {
    title: "root_page",
    path: PATHS.root_page,
    element: <Pages.MainPage />,
    children: [],
  },
  {
    title: "tools_page",
    path: PATHS.tools_page,
    element: <Pages.ToolsPage />,
    children: [],
  },
  {
    title: "articles_page",
    path: PATHS.articles_page,
    element: <Pages.ArticlesPage />,
    children: [],
  },
  {
    title: "article_page",
    path: PATHS.article_page,
    element: <Pages.ActiveArticlePage />,
    children: [],
  },
  {
    title: "dashboard_page",
    path: PATHS.dashboard_page,
    element: <Pages.DashboardPage />,
    children: [
      {
        title: "dashboard_products_page",
        path: PATHS.dashboard_products_page,
        element: <Pages.DashboardProductsPage />,
        children: [],
      },
      {
        title: "dashboard_products_create_page",
        path: PATHS.dashboard_products_create_page,
        element: <Pages.DashboardCreateProductPage />,
        children: [],
      },
      {
        title: "dashboard_email_page",
        path: PATHS.dashboard_email_page,
        element: <Pages.DashboardEmailPage />,
        children: [],
      },
      {
        title: "dashboard_articles_page",
        path: PATHS.dashboard_articles_page,
        element: <Pages.DashboardArticlesPage />,
        children: [],
      },
      {
        title: "dashboard_article_page",
        path: PATHS.dashboard_article_page,
        element: <Pages.DashboardArticlePage />,
        children: [],
      },
      {
        title: "dashboard_create_article_page",
        path: PATHS.dashboard_create_article_page,
        element: <Pages.CreateArticlePage />,
        children: [],
      },
    ],
  },
  {
    title: "auth_page",
    path: PATHS.auth_page,
    element: <Pages.AuthPage />,
    children: [
      {
        title: "auth_login_page",
        path: PATHS.auth_login_page,
        element: <Pages.LoginPage />,
        children: [],
      },
      {
        title: "auth_register_page",
        path: PATHS.auth_register_page,
        element: <Pages.RegisterPage />,
        children: [],
      },
      {
        title: "auth_forgot_password_page",
        path: PATHS.auth_forgot_password_page,
        element: <Pages.ForgotPasswordPage />,
        children: [],
      },
      {
        title: "auth_confirm_email_page",
        path: PATHS.auth_confirm_email_page,
        element: <Pages.ConfirmEmailPage />,
        children: [],
      },
      {
        title: "auth_update_password_page",
        path: PATHS.auth_update_password_page,
        element: <Pages.UpdatePasswordPage />,
        children: [],
      },
    ],
  },
];

export default routes;
