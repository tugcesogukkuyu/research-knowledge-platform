const WORDPRESS_API_URL = import.meta.env.VITE_WORDPRESS_API_URL

function stripHtml(html) {
  const div = document.createElement("div")
  div.innerHTML = html
  return div.textContent || div.innerText || ""
}

function getFeaturedImage(item) {
  return item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || null
}

function mapResearchItem(item) {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title.rendered,
    content: stripHtml(item.content.rendered),
    description: stripHtml(item.content.rendered).slice(0, 150),
    date: item.date.split("T")[0],

    category: item.acf?.research_category || "Environment",
    readingTime: item.acf?.reading_time || "8 min read",
    featuredStatistic: item.acf?.featured_statistic || "54%",
    integrityApproved: item.acf?.integrity_approved || false,
    summaryPdf: item.acf?.summary_pdf || null,

    researchImage: getFeaturedImage(item),
    featured: true,
  }
}

export async function fetchResearchTopics() {
  const response = await fetch(`${WORDPRESS_API_URL}?_embed`)

  if (!response.ok) {
    throw new Error("Failed to fetch research topics")
  }

  const data = await response.json()

  return data.map(mapResearchItem)
}

export async function fetchResearchTopicBySlug(slug) {
  const response = await fetch(`${WORDPRESS_API_URL}?slug=${slug}&_embed`)

  if (!response.ok) {
    throw new Error("Failed to fetch research topic")
  }

  const data = await response.json()

  if (!data.length) {
    return null
  }

  return mapResearchItem(data[0])
}