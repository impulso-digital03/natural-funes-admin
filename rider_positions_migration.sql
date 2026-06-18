-- Tabla para posiciones en vivo del cadete
create table if not exists public.rider_positions (
  order_id   text primary key,
  lat        double precision not null,
  lng        double precision not null,
  accuracy   double precision,
  updated_at timestamptz default now()
);

-- RLS: el cadete puede escribir, cualquiera puede leer (para tracking público)
alter table public.rider_positions enable row level security;

create policy "lectura publica rider_positions"
  on public.rider_positions for select
  using (true);

create policy "escritura anonima rider_positions"
  on public.rider_positions for insert
  with check (true);

create policy "update anonimo rider_positions"
  on public.rider_positions for update
  using (true);

-- Realtime: habilitar para la tabla
alter publication supabase_realtime add table public.rider_positions;
