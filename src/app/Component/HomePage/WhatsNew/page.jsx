import Image from 'next/image';
import Link from 'next/link';

export default function BlogCards() {
  const articles = [
    {
      id: 1,
      // type: 'Article',
      // readTime: '7 min read',
      title: "InstaConnect – Streamlined Vendor Management with InstaCRM ",
      description: 'The Vendor Application is designed to seamlessly integrate with InstaCRM, enabling vendors to manage leads, track deals, and optimize their sales process.',
      image: '/Assests/Product/Product-thumbnail.png',
    },
    {
      id: 2,
      title: 'InstaBooking – The Future of Event Booking & Management ',
      description: 'Discover how InstaBooking is revolutionizing the event booking and management industry with its cutting-edge features and capabilities.',
      image: '/Assests/Product/1.png',
    },
    {
      id: 3,
      // type: 'Article',
      // readTime: '6 min read',
      title: 'InstaShield – The Smartest Way to Monitor & Capture Employee Activity ',
      description: 'InstaShield is a powerful employee monitoring tool that helps you track employee activity, monitor productivity, and ensure data security.',
      image: '/Assests/Product/2.png',
    },
    {
      id: 4,
      title: 'Insta Call Recording – The Ultimate Guide to Call Recording & Monitoring',
      description: 'Learn how Insta Call Recording can help you record, monitor, and analyze calls to improve customer service, sales, and compliance.',
      image: '/Assests/Product/4.png',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-8">
        What`s new at InstaPlex ?
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* First Card (Left, Image on Top, Content Below) */}
        <div className="lg:col-span-2 border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="flex flex-col">
            {/* Image Container */}
            <div className="relative h-48 lg:h-80 w-full rounded-2xl overflow-hidden">
              <Image
                src={articles[0].image}
                alt={articles[0].title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
            </div>

            {/* Content Container */}
            <div className="flex flex-col p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-indigo-600 font-medium text-sm">
                  {articles[0].type}
                </span>
                {articles[0].readTime && (
                  <>
                    <span className="text-gray-500">|</span>
                    <span className="text-gray-500 text-sm">{articles[0].readTime}</span>
                  </>
                )}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-3">
                {articles[0].title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {articles[0].description}
              </p>
              <Link href={`/articles/${articles[0].id}`} className="mt-auto">
                <span className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200">
                  Read More →
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column Cards (Suggested Cards) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="flex flex-col md:flex-row border items-center border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-48"
            >
              {/* Image Container */}
              <div className="relative h-72 md:h-full md:w-1/3 lg:h-full lg:w-1/2 rounded-2xl overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>

              {/* Content Container */}
              <div className="flex flex-col p-4 md:w-2/3 lg:w-2/3">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className="text-indigo-600 font-medium text-sm">
                    {article.type}
                  </span>
                  {article.readTime && (
                    <>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-500 text-sm">{article.readTime}</span>
                    </>
                  )}
                  {article.industry && (
                    <>
                      <span className="text-gray-500">|</span>
                      <span className="text-gray-500 text-sm">{article.industry}</span>
                    </>
                  )}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900 line-clamp-3">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {article.description}
                </p>
                {article.subtext && (
                  <p className="text-xs text-gray-600 mt-auto">
                    {article.subtext}
                  </p>
                )}
                {/* <Link href={`/articles/${article.id}`} className="mt-auto">
                  <span className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors duration-200">
                    Read More →
                  </span>
                </Link> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}