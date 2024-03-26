
class Categorii extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `

    <div class="sidebars-item category">
        <div class="title">
            <h4>Courses Category</h4>
        </div>
        <ul>
            <li>
                <a href="x-cat-presentation.html">Presentation <span>23</span></a>
            </li>
            <li>
                <a href="x-cat-personal-branding.html">Personal Branding <span>0</span></a>
            </li>
            <li>
                <a href="x-cat-teaching.html">Teaching <span>12</span></a>
            </li>
            <li>
                <a href="x-cat-communication.html">Communication <span>17</span></a>
            </li>
            <li>
                <a href="x-cat-negotiation.html">Negotiation <span>0</span></a>
            </li>
        </ul>
    </div>

    `;
  }
}

class Lainnya extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    
        <div class="sidebars-item similar-courses">
            <div class="title">
                <h4>Other Courses</h4>
            </div>
            <ul style="list-style-type: none;">
                <li>
                    <div class="thumb">
                        <a href="LINKCOURSE">
                            <img src="https://placehold.co/800x800" alt="Thumb" class="img-fluid rounded">
                        </a>
                    </div>
                    <div class="info">
                        <a href="LINKCOURSE">Subjects allied to Creative arts and design</a>
                        <div class="meta">
                            <span>IDR 79K</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="thumb">
                        <a href="LINKCOURSE">
                            <img src="https://placehold.co/800x800" alt="Thumb" class="img-fluid rounded">
                        </a>
                    </div>
                    <div class="info">
                        <a href="LINKCOURSE">Business and administrative subjects</a>
                        <div class="meta">
                            <span>IDR 79K</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="thumb">
                        <a href="LINKCOURSE">
                            <img src="https://placehold.co/800x800" alt="Thumb" class="img-fluid rounded">
                        </a>
                    </div>
                    <div class="info">
                        <a href="LINKCOURSE">Business and administrative subjects</a>
                        <div class="meta">
                            <span>IDR 79K</span>
                            <div class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half-alt"></i>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    `;
  }
}

customElements.define("main-category", Categorii);
customElements.define("main-lainnya", Lainnya);
