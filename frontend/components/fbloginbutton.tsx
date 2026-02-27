"use client";

export default function FbLoginButton() {
  const handleLogin = () => {
    const fbOauthUrl = `https://www.facebook.com/v17.0/dialog/oauth?client_id=${process.env.FB_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_BASE_URL}&scope=email,publish_video&response_type=token`;
    window.location.href = fbOauthUrl;
  };

  return (
    <button
      onClick={handleLogin}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Login with Facebook
    </button>
  );
}