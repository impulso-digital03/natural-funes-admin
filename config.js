/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║          IMPULSO DIGITAL — CONFIG POR CLIENTE           ║
 * ║  Cambiá solo este archivo para adaptar el sistema       ║
 * ║  a un nuevo cliente. Todo lo demás se adapta solo.      ║
 * ╚══════════════════════════════════════════════════════════╝
 *
 * CHECKLIST DE ONBOARDING — qué completar con el cliente:
 * [ ] negocio: nombre, rubro, logo, color, ciudad, telefono, email
 * [ ] supabase: url y key del proyecto del cliente
 * [ ] mercadopago: alias y CVU (sin credencial de API aún)
 * [ ] mercadopago.access_token: pedir al cliente su token de MP
 * [ ] resend.api_key: configurar dominio de email del cliente
 * [ ] whatsapp.numero: número aprobado por Meta (requiere cuenta WA Business)
 * [ ] afip.cuit: CUIT del negocio para facturación electrónica
 */

const CONFIG = {

  // ── DATOS DEL NEGOCIO ─────────────────────────────────────
  negocio: {
    nombre:          'Natural Funes',
    rubro:           'Almacén de barrio',
    logo_emoji:      '🌿',
    logo_url:        null,            // URL de imagen si tienen logo
    color_primario:  '#16a34a',       // Verde
    color_secundario:'#15803d',
    ciudad:          'Funes, Santa Fe',
    telefono:        '',
    email:           '',
    direccion:       'Av. Fuerza Aérea 2092 Sur, Funes',
    instagram:       '',
    horarios:        'Lun-Sáb 8:00 a 20:00',
  },

  // ── SUPABASE (infraestructura de base de datos) ──────────
  // 🔴 REQUIERE: crear proyecto en supabase.com por cliente
  supabase: {
    url: 'https://zxbdzeggkdrggelxskfu.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp4YmR6ZWdna2RyZ2dlbHhza2Z1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY5Njk2NDAsImV4cCI6MjA5MjU0NTY0MH0.OgSJnFExZEw8wWp1E3qx12eyQ6h9_0-15ZJCnZBaIFA',
  },

  // ── MERCADO PAGO ─────────────────────────────────────────
  // 🔴 REQUIERE: que el cliente te dé acceso a su cuenta MP
  mercadopago: {
    alias:        'fontanarrosa03',
    cvu:          '0000003100088906617470',
    pay_url:      'https://link.mercadopago.com.ar/impulsodigitalger',
    access_token: null,   // 'APP_USR-...' — pedir al cliente
  },

  // ── EMAIL (Resend) ────────────────────────────────────────
  // 🔴 REQUIERE: dominio del cliente verificado en resend.com
  resend: {
    api_key:    null,     // 're_...' — configurar en Supabase Secrets
    from_email: null,     // 'pedidos@dominiocliente.com'
    from_name:  'Natural Funes',
  },

  // ── WHATSAPP ─────────────────────────────────────────────
  // 🔴 REQUIERE: cuenta de WhatsApp Business API (Meta)
  whatsapp: {
    numero:       null,   // '5493413XXXXXXX' — número del negocio
    bot_activo:   false,
  },

  // ── AFIP / FACTURACIÓN ELECTRÓNICA ───────────────────────
  // 🔴 REQUIERE: CUIT + certificado digital AFIP del cliente
  afip: {
    cuit:         null,   // '20-XXXXXXXX-X'
    condicion_iva:'Monotributista',  // o 'Responsable Inscripto'
    punto_venta:  1,
    certificado:  null,   // Subir a Supabase Storage
    clave_privada:null,
  },

  // ── GOOGLE MAPS (GPS tracking) ───────────────────────────
  // ✅ YA CONFIGURADO — reutilizable entre clientes
  google_maps: {
    api_key: 'AIzaSyBJuyuzkqqORuwm1VGHu6mWtlsWIvjsZ1k',
  },

  // ── IA (Claude para lector de facturas) ──────────────────
  // ✅ YA CONFIGURADO en Supabase Secrets como ANTHROPIC_API_KEY
  ia: {
    activo: true,
    modelo: 'claude-haiku-4-5-20251001',
  },

  // ── MÓDULOS ACTIVOS ───────────────────────────────────────
  // Activá o desactivá módulos según lo que contrate el cliente
  modulos: {
    tienda_online:     true,
    admin_panel:       true,
    gps_delivery:      true,
    caja_facturacion:  true,
    crm:               true,
    stock_alertas:     true,
    reportes_mensuales:true,
    empleados:         true,
    whatsapp_bot:      false,   // requiere cliente
    factura_electronica:false,  // requiere AFIP cliente
    multi_sucursal:    false,   // próximamente
  },

  // ── DELIVERY ─────────────────────────────────────────────
  delivery: {
    activo:       true,
    costo:        500,
    gratis_desde: 5000,
    radio_km:     10,
  },

};

// ── Helpers globales ─────────────────────────────────────────
const NEGOCIO = CONFIG.negocio;
const SUPABASE_URL = CONFIG.supabase.url;
const SUPABASE_KEY = CONFIG.supabase.key;
