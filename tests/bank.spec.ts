// tests/bank.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { AccountsOverviewPage } from '../pages/AccountsOverviewPage';

test.describe('ParaBank Test Suite', () => {
  let loginPage: LoginPage;
  let registerPage: RegisterPage;
  let accountsOverviewPage: AccountsOverviewPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    registerPage = new RegisterPage(page);
    accountsOverviewPage = new AccountsOverviewPage(page);
  });

  test('Registro de nuevo usuario', async ({ page }) => {
    await registerPage.navigate();
    
    const timestamp = Date.now();
    const username = `testuser${timestamp}`;
    
    await registerPage.registerNewUser({
      firstName: 'Test',
      lastName: 'User',
      address: '123 Test St',
      city: 'Test City',
      state: 'TS',
      zipCode: '12345',
      phone: '123-456-7890',
      ssn: '123-45-6789',
      username: username,
      password: 'Test123!'
    });

    // Esperar a que la página se actualice después del registro
    await page.waitForLoadState('networkidle');

    // Verificar que el registro fue exitoso comprobando que estamos en la página correcta
    // y que aparece el botón de Login (lo que indica que podemos usar las nuevas credenciales)
    await expect(loginPage.loginButton).toBeVisible();

    // Intentar login con las nuevas credenciales
    await loginPage.login(username, 'Test123!');

    // Verificar que el login fue exitoso
    await expect(page).toHaveURL(/.*overview.htm/);
  });

  test('Login exitoso', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('john', 'demo');

    // Esperar a que la página se cargue completamente
    await page.waitForLoadState('networkidle');

    // Verificar que estamos en la página de overview después del login
    await expect(page).toHaveURL(/.*overview.htm/);

    // Verificar que hay elementos que indican un login exitoso
    await expect(accountsOverviewPage.logoutLink).toBeVisible();
  });

  test('Login fallido', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('usuario_invalido', 'contraseña_invalida');

    // Esperar a que aparezca el mensaje de error
    await page.waitForLoadState('networkidle');
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage.toLowerCase()).toContain('error');
  });

  test('Logout exitoso', async ({ page }) => {
    await loginPage.navigate();
    await loginPage.login('john', 'demo');
    
    // Esperar a que la página se cargue completamente
    await page.waitForLoadState('networkidle');

    await accountsOverviewPage.logout();
    
    // Verificar que volvimos a la página de login
    await expect(loginPage.loginButton).toBeVisible();
  });
});