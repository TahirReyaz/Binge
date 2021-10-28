class Anime {
  constructor(thumbnail, malUrl, shortDesc, title, type, nbEps, score, startDate, endDate, rating, id, genreId, genre) {
    this.thumbnail = thumbnail,
    this.malUrl = malUrl,
    this.shortDesc = shortDesc,
    this.title = title,
    this.type = type,
    this.nbEps = nbEps,
    this.score = score,
    this.startDate = startDate,
    this.endDate = endDate,
    this.rating = rating,
    this.id = id,
    this.genreId = genreId
    this.genre = genre
  }
}

export default Anime;