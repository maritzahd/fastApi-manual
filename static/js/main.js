const manualData = {
    topics: [
        {
            id: 1,
            title: 'Inicio',
            content: `
                <div class="content-header">
                    <h1>Manual de FastAPI</h1>
                    <p class="subtitle">Herramienta para aprender FastAPI</p>
                </div>
                <div class="deco-line"></div>
                <p>FastAPI es uno de los frameworks más modernos y rápidos para construir APIs con Python.</p>
                <p>Se ha convertido en una herramienta para desarrolladores que buscan crear aplicaciones web robustas, con alto rendimiento y una curva de aprendizaje suave.</p>
                <h2>¿Qué encontrarás aquí?</h2>
                <ul>
                    <li><strong>Qué es FastAPI</strong> - Conceptos básicos</li>
                    <li><strong>Características</strong> - Lo que hace diferente a FastAPI</li>
                    <li><strong>Cómo funciona</strong> - Principios internos y arquitectura</li>
                    <li><strong>Tu primera API</strong> - Crea tu primer endpoint</li>
                    <li><strong>Instalación</strong> - Guía paso a paso para empezar</li>
                </ul>
                <p>Navega por los temas usando el menú lateral o los botones de navegación.</p>
            `
        },
        {
            id: 2,
            title: '¿Qué es FastAPI?',
            content: `
                <div class="content-header">
                    <h1>¿Qué es FastAPI?</h1>
                    <p class="subtitle">El framework moderno para APIs en Python</p>
                </div>
                <div class="deco-line"></div>
                <p><strong>FastAPI</strong> es un framework web moderno y rápido para construir APIs con Python 3.6+.</p>
                <p>Fue creado por Sebastián Ramírez y ha ganado popularidad rápidamente.</p>
                <h2>Principios fundamentales</h2>
                <ul>
                    <li><strong>Rápido</strong>: Rendimiento excepcional</li>
                    <li><strong>Fácil de usar</strong>: Curva de aprendizaje suave</li>
                    <li><strong>Documentación automática</strong>: Swagger UI y ReDoc</li>
                    <li><strong>Basado en estándares</strong>: OpenAPI y JSON Schema</li>
                </ul>
            `
        },
        {
            id: 3,
            title: 'Características',
            content: `
                <div class="content-header">
                    <h1>Características de FastAPI</h1>
                </div>
                <div class="deco-line"></div>
                <p>FastAPI ofrece un conjunto de características que lo convierten en una opción destacada.</p>
                <div class="concept-grid">
                    <div class="concept-card">
                        <div class="concept-title">Alto rendimiento</div>
                        <div class="concept-desc">Construido sobre Starlette y Pydantic.</div>
                    </div>
                    <div class="concept-card">
                        <div class="concept-title">Validación automática</div>
                        <div class="concept-desc">Valida datos con Pydantic.</div>
                    </div>
                    <div class="concept-card">
                        <div class="concept-title">Documentación interactiva</div>
                        <div class="concept-desc">Swagger UI y ReDoc automáticos.</div>
                    </div>
                    <div class="concept-card">
                        <div class="concept-title">Seguridad integrada</div>
                        <div class="concept-desc">Soporte para OAuth2 y JWT.</div>
                    </div>
                </div>
            `
        },
        {
    id: 4,
    title: 'Cómo funciona',
    content: `
        <div class="content-header">
            <h1>Cómo funciona - Principios internos y arquitectura</h1>
            <p class="subtitle">Comprendiendo el funcionamiento interno de FastAPI</p>
        </div>

        <div class="deco-line"></div>

        <p>
            FastAPI utiliza una arquitectura cliente-servidor donde las solicitudes HTTP
            enviadas por el navegador son procesadas por el servidor, el cual ejecuta
            la lógica del sistema y devuelve una respuesta.
        </p>

        <h2>Arquitectura general</h2>

<pre><code>
            Usuario
               │
               │ HTTP
               ▼
        ┌──────────────────┐
        │     FastAPI      │
        │ Servidor Backend │
        └────────┬─────────┘
                 │
      ┌──────────┼──────────┐
      │          │          │
      ▼          ▼          ▼
 JWT/OAuth2   Endpoints   Jinja2
                 │
                 ▼
             SQLite
</code></pre>

        <h2>Flujo de trabajo</h2>

        <ol>
            <li>El usuario abre la aplicación.</li>
            <li>Envía una solicitud HTTP.</li>
            <li>FastAPI recibe la petición.</li>
            <li>Valida los datos recibidos.</li>
            <li>Ejecuta la lógica correspondiente.</li>
            <li>Consulta o actualiza la base de datos.</li>
            <li>Devuelve una respuesta HTML o JSON.</li>
        </ol>

        <h2>Componentes principales</h2>

        <div class="concept-grid">

            <div class="concept-card">
                <div class="concept-title">FastAPI</div>
                <div class="concept-desc">
                    Framework encargado de gestionar rutas, peticiones y respuestas.
                </div>
            </div>

            <div class="concept-card">
                <div class="concept-title">Jinja2</div>
                <div class="concept-desc">
                    Motor de plantillas para generar páginas HTML dinámicamente.
                </div>
            </div>

            <div class="concept-card">
                <div class="concept-title">SQLite</div>
                <div class="concept-desc">
                    Base de datos ligera utilizada para almacenar la información.
                </div>
            </div>

            <div class="concept-card">
                <div class="concept-title">JWT</div>
                <div class="concept-desc">
                    Sistema de autenticación mediante Tokens.
                </div>
            </div>

        </div>
    `
},

{
    id: 5,
    title: 'Tu primera API',
    content: `
        <div class="content-header">
            <h1>Tu primera API - Crea tu primer endpoint</h1>
            <p class="subtitle">Primeros pasos con FastAPI</p>
        </div>

        <div class="deco-line"></div>

        <p>
            Un endpoint representa una dirección a la que un cliente puede enviar
            solicitudes para obtener o modificar información.
        </p>

        <h2>Ejemplo básico</h2>

<pre><code>from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def inicio():
    return {"mensaje":"Hola Mundo"}
</code></pre>

        <p>
            Al abrir:
        </p>

<pre><code>http://127.0.0.1:8000/</code></pre>

        <p>La respuesta será:</p>

<pre><code>{
    "mensaje":"Hola Mundo"
}</code></pre>

        <h2>Endpoint con parámetro</h2>

<pre><code>@app.get("/usuarios/{id}")
def usuario(id:int):
    return {
        "id":id,
        "nombre":"Marbella"
    }
</code></pre>

        <h2>Endpoint POST</h2>

<pre><code>from pydantic import BaseModel

class Usuario(BaseModel):
    nombre:str
    correo:str

@app.post("/usuarios")
def crear(usuario:Usuario):
    return usuario
</code></pre>

        <h2>Documentación automática</h2>

        <p>
            FastAPI genera automáticamente la documentación Swagger.
        </p>

<pre><code>http://127.0.0.1:8000/docs</code></pre>

        <p>
            También incluye la documentación ReDoc.
        </p>

<pre><code>http://127.0.0.1:8000/redoc</code></pre>

    `
},

{
    id: 6,
    title: 'Instalación',
    content: `
        <div class="content-header">
            <h1>Instalación - Guía paso a paso</h1>
            <p class="subtitle">Preparando el entorno de desarrollo</p>
        </div>

        <div class="deco-line"></div>

        <h2>Requisitos</h2>

        <ul>
            <li>Python 3.10 o superior</li>
            <li>pip</li>
            <li>Git</li>
            <li>Visual Studio Code (opcional)</li>
        </ul>

        <h2>1. Clonar el proyecto</h2>

<pre><code>git clone https://github.com/usuario/proyecto.git

cd proyecto
</code></pre>

        <h2>2. Crear un entorno virtual</h2>

<pre><code>python -m venv venv</code></pre>

        <h2>3. Activar el entorno</h2>

<pre><code>Windows

venv\\Scripts\\activate

Linux/macOS

source venv/bin/activate
</code></pre>

        <h2>4. Instalar dependencias</h2>

<pre><code>pip install fastapi

pip install uvicorn

pip install python-jose

pip install passlib[bcrypt]

pip install python-multipart

pip install jinja2

pip install email-validator
</code></pre>

        <h2>5. Ejecutar el proyecto</h2>

<pre><code>uvicorn main:app --reload</code></pre>

        <h2>6. Abrir la aplicación</h2>

<pre><code>http://127.0.0.1:8000

http://127.0.0.1:8000/docs

http://127.0.0.1:8000/redoc
</code></pre>

        <div class="concept-grid">

            <div class="concept-card">
                <div class="concept-title">Swagger UI</div>
                <div class="concept-desc">
                    Permite probar todos los endpoints de manera interactiva.
                </div>
            </div>

            <div class="concept-card">
                <div class="concept-title">ReDoc</div>
                <div class="concept-desc">
                    Presenta la documentación con un formato limpio y organizado.
                </div>
            </div>

        </div>
    `
}
    ]
};

let state = {
    currentTopic: 1,
    visitedTopics: new Set()
};

const contentArea = document.getElementById('content-area');
const sidebar = document.getElementById('sidebar');
const loadingSpinner = document.getElementById('loading-spinner');

function renderSidebar() {
    const total = manualData.topics.length;
    let html = `
        <div class="sidebar-header">
            <h3>Contenido</h3>
            <span class="sidebar-badge">${total} temas</span>
        </div>
        <ul>
    `;

    manualData.topics.forEach((topic, index) => {
        const isActive = topic.id === state.currentTopic;
        const isVisited = state.visitedTopics.has(topic.id);
        const check = isVisited && !isActive ? '✓' : '';
        html += `
            <li>
                <a href="#" class="${isActive ? 'active' : ''}" onclick="loadTopic(${topic.id})">
                    <span>${topic.title}</span>
                    <span class="num">${isActive ? '●' : check || String(index + 1).padStart(2, '0')}</span>
                </a>
            </li>
        `;
    });

    html += '</ul>';
    sidebar.innerHTML = html;
}

function loadTopic(id) {
    showLoading();
    setTimeout(() => {
        const topic = manualData.topics.find(t => t.id === id);
        if (!topic) return;
        state.currentTopic = id;
        state.visitedTopics.add(id);
        renderContent(topic);
        renderSidebar();
        hideLoading();
    }, 200);
}

function renderContent(topic) {
    const total = manualData.topics.length;
    const visited = state.visitedTopics.size;
    const isComplete = visited === total;
    const progress = Math.round((visited / total) * 100);

    let html = `
        <div>
            ${topic.content}
            <div class="progress-section">
                <div class="progress-bar-track">
                    <div class="progress-bar-fill" style="width: ${progress}%"></div>
                </div>
                <span class="progress-text">
                    <strong>${visited}</strong> de ${total} leídos
                    ${isComplete ? ' · Completado' : ''}
                </span>
            </div>
            <div class="content-nav">
                <div class="left">
                    <button onclick="navigate(-1)" ${state.currentTopic <= 1 ? 'disabled' : ''}>
                        ← Anterior
                    </button>
                    <button onclick="navigate(1)" ${state.currentTopic >= total ? 'disabled' : ''}>
                        Siguiente →
                    </button>
                </div>
                <div class="status">
                    ${isComplete ? '<span class="complete">✓ Completado</span>' : ''}
                </div>
            </div>
        </div>
    `;

    contentArea.innerHTML = html;
}

function navigate(direction) {
    const newId = state.currentTopic + direction;
    if (newId >= 1 && newId <= manualData.topics.length) {
        loadTopic(newId);
    }
}

function showLoading() {
    loadingSpinner.style.display = 'block';
    contentArea.style.display = 'none';
}

function hideLoading() {
    loadingSpinner.style.display = 'none';
    contentArea.style.display = 'block';
}

// Inicializar
document.addEventListener('DOMContentLoaded', function() {
    renderSidebar();
    loadTopic(1);
});

// Teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        navigate(1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        navigate(-1);
    }
});