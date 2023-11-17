<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create(['category' => 'Alimentação']);
        Category::create(['category' => 'Educação']);
        Category::create(['category' => 'Lazer']);
        Category::create(['category' => 'Saúde']);
        Category::create(['category' => 'Transporte']);
        Category::create(['category' => 'Cartão de Crédito']);
        Category::create(['category' => 'Contas de Casa']);
        Category::create(['category' => 'Compras']);
        Category::create(['category' => 'Investimentos']);
        Category::create(['category' => 'Salário']);
        Category::create(['category' => 'Outros']);
    }
}
